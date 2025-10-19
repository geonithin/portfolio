from pathlib import Path
import re
p=Path(__file__).parents[1]/'index.html'
s=p.read_text(encoding='utf-8')
pattern=re.compile(r'<div[^>]*class="[^"]*grid md:grid-cols-2[^"]*"[^>]*>', re.IGNORECASE)
starts=[m.start() for m in pattern.finditer(s)]
print('found',len(starts),'grid blocks')
for idx,start in enumerate(starts,1):
    # find matching closing </div> for this start
    i=start
    depth=0
    tag_re=re.compile(r'<(/?)(div)([^>]*)>', re.IGNORECASE)
    for m in tag_re.finditer(s, start):
        closing = m.group(1)=='/'
        if not closing:
            depth+=1
        else:
            depth-=1
        if depth==0:
            end=m.end()
            break
    block=s[start:end]
    # now scan block to count direct child divs of the grid
    # iterate tags inside block from the end of the opening tag
    open_tag_match=pattern.search(block)
    pos=open_tag_match.end()
    depth=0
    child_divs=0
    for m in tag_re.finditer(block,pos):
        closing = m.group(1)=='/'
        if not closing:
            depth+=1
            if depth==1:
                # this is a top-level child div
                child_divs+=1
        else:
            depth-=1
    print(f'block {idx}: starts at {start}, length {len(block)}, direct child divs:', child_divs)
    # print context for problematic ones
    if child_divs!=2:
        # show surrounding lines
        lines=s[:start].splitlines()
        start_line=len(lines)
        block_lines=block.splitlines()
        print('--- context lines',start_line+1,'to',start_line+len(block_lines))
        for i,l in enumerate(block_lines, start_line+1):
            print(f'{i:5}: {l}')
        print('\n')
