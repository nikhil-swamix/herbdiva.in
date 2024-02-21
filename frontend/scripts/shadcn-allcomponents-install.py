import requests, os
from selectolax.parser import HTMLParser
tree = HTMLParser(requests.get('https://www.shadcn-svelte.com/docs/components/').text)
components = map(lambda x: x.text(deep=True).strip().lower().replace(" ", '-'), tree.css('div.pb-4:nth-child(2) a'))
os.system(f"cd ../ && pnpm dlx shadcn-svelte@latest add {' '.join(components)} -y --overwrite")