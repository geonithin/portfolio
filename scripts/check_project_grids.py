from pathlib import Path
p=Path(__file__).parents[1]/'index.html'
s=p.read_text(encoding='utf-8')
lines=s.splitlines()
problems=[]
for i,l in enumerate(lines):
    if 'bg-violet-500/10' in l and 'overflow-hidden' in l:
        # look ahead for the next non-empty tag line
        found=False
        for j in range(i+1, i+15):
            if j>=len(lines): break
            if 'grid' in lines[j]:
                found=True
                break
        if not found:
            problems.append((i+1, lines[i].strip(), '\n'.join(lines[i+1:i+8])))
print('found', len(problems), 'problem project blocks')
for idx, head, snippet in problems:
    print('\n--- Problem at line', idx, '---')
    print(head)
    print(snippet)
