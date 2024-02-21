"""
1. i have a strapi database at http://localhost:1337/api/
"""

import pandas as pd
import requests

df = pd.read_excel(r"./herbdiva datasheet.xlsx", None)
# print(df.keys())

# iterate through sub sheets
for sheet in df.keys():
    if x:=requests.get('http://localhost:1337/api/categories?filters[name][$eq]=' + sheet.upper()).json()['data']:
        print("Category already exists",x)
        cid = x[0]['id']

    else:
        resp = requests.post(
            'http://localhost:1337/api/categories',
            json={"data": {'name': sheet.upper()}},
            headers={'Content-Type': 'application/json'},
        )
        print(resp.json())
    # sheets have PRODUCT   PACK  MRP , add PRODUCT+PACK as seperate col and remove PRODUCT and PACK
    df[sheet]['PRODUCT'] = df[sheet]['PRODUCT'].str.title()
    df[sheet]['PRODUCT-PACK'] = df[sheet]['PRODUCT'] + " " + df[sheet]['PACK']
    df[sheet]['PRODUCT-PACK'] = df[sheet]['PRODUCT-PACK']
    for index, row in df[sheet].iterrows():
        ...
        # print(df[sheet].head(100))
        response = requests.post(
            'http://localhost:1337/api/products?populate=*',
            json={"data": {'title': row['PRODUCT-PACK'], 'price': row['MRP'], 'category': {"connect": [cid]}}},
        )
        print(response.json())
