#!/usr/bin/env python3
import json, base64, urllib.request, time, os

API_KEY = open(os.path.expanduser("~/.config/nanobanana/api_key")).read().strip()
OUTPUT_DIR = "/Users/alphonse/clawd/projects/btpsheets/site/public/images/products"
os.makedirs(OUTPUT_DIR, exist_ok=True)

BASE_URL = f"https://generativelanguage.googleapis.com/v1beta/models/nano-banana-pro-preview:generateContent?key={API_KEY}"

IMAGES = [
    ("rental-property-analyzer", "Professional product mockup photo: A laptop screen showing a detailed Excel spreadsheet for rental property investment analysis with charts showing cash flow projections, key metrics like Cap Rate and Cash-on-Cash Return highlighted in green. Clean desk setup, soft natural lighting, modern minimal office. Photorealistic, 4K quality."),
    ("flip-brrrr-calculator", "Professional product mockup photo: A laptop displaying an Excel spreadsheet for house flipping analysis with a rehab budget breakdown, profit calculator with green GO indicator, and BRRRR refinance analysis. Modern desk with blueprints and calculator nearby. Photorealistic, professional lighting."),
    ("construction-budget-tracker", "Professional product mockup photo: A laptop showing a detailed Excel construction budget spreadsheet with cost categories, a dashboard showing budget vs actual spending chart, change orders section. Construction site photos on wall in background. Clean professional photography."),
    ("development-pro-forma", "Professional product mockup photo: A laptop displaying a sophisticated real estate development pro forma Excel spreadsheet with IRR calculations, waterfall distribution chart, and sources & uses table. Executive desk setup, city skyline view from window. Premium feel, photorealistic."),
    ("contractor-estimate", "Professional product mockup photo: A laptop showing a clean professional contractor estimate template in Excel with itemized line items, company header, and grand total. Work tools (measuring tape, hard hat) artistically placed nearby. Clean photography style."),
    ("hero-banner", "Professional wide banner image for a spreadsheet template website. Clean modern desk with laptop showing Excel charts and real estate data. Warm amber accent lighting. Construction blueprints and financial documents artistically scattered. Premium digital product brand feel. Wide aspect ratio 16:9."),
]

for name, prompt in IMAGES:
    output = os.path.join(OUTPUT_DIR, f"{name}.png")
    if os.path.exists(output):
        print(f"⏭️  {name} already exists, skipping")
        continue

    print(f"🎨 Generating {name}...")
    
    payload = json.dumps({
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {"responseModalities": ["TEXT", "IMAGE"]}
    }).encode()
    
    req = urllib.request.Request(BASE_URL, data=payload, headers={"Content-Type": "application/json"})
    
    try:
        resp = urllib.request.urlopen(req, timeout=120)
        data = json.loads(resp.read())
        
        saved = False
        for part in data["candidates"][0]["content"]["parts"]:
            if "inlineData" in part:
                img_bytes = base64.b64decode(part["inlineData"]["data"])
                with open(output, "wb") as f:
                    f.write(img_bytes)
                print(f"✅ Saved {name} ({len(img_bytes)} bytes)")
                saved = True
                break
        
        if not saved:
            print(f"❌ No image in response for {name}")
            print(json.dumps(data, indent=2)[:500])
    except Exception as e:
        print(f"❌ Error generating {name}: {e}")
    
    time.sleep(3)

print("\n🎉 Done!")
for f in os.listdir(OUTPUT_DIR):
    path = os.path.join(OUTPUT_DIR, f)
    print(f"  {f}: {os.path.getsize(path)} bytes")
