from pathlib import Path
import re
p=Path(__file__).parents[1]/'index.html'
s=p.read_text(encoding='utf-8')
tag_re=re.compile(r'<(/?)([a-zA-Z0-9:-]+)([^>]*)>')
void={'area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'}
stack=[]
errors=[]
for m in tag_re.finditer(s):
    closing=m.group(1)=='/'
    tag=m.group(2).lower()
    attrs=m.group(3)
    selfclose = attrs.strip().endswith('/')
    if tag=='!--':
        continue
    if closing:
        if not stack:
            errors.append(('extra-closing',tag,m.start()))
            break
        last=stack.pop()
        if last!=tag:
            errors.append(('mismatch', last, tag, m.start()))
            break
    else:
        if tag in void or selfclose:
            continue
        stack.append(tag)
if errors:
    print('ERROR',errors[0])
    pos=errors[0][-1]
    lines=s.splitlines()
    cum=0
    for i,l in enumerate(lines):
        cum+=len(l)+1
        if cum>pos:
            li=i+1
            break
    start=max(1,li-6)
    end=min(len(lines),li+6)
    print('\nContext lines',start,'to',end)
    for n in range(start,end+1):
        print(f"{n:4}: {lines[n-1]}")
else:
    if stack:
        print('UNclosed tags at end, top=',stack[-1])
    else:
        print('OK - no mismatches')
