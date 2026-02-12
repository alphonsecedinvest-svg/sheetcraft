#!/bin/bash
set -e

API_KEY=$(cat ~/.config/nanobanana/api_key)
OUTPUT_DIR="/Users/alphonse/clawd/projects/btpsheets/site/public/images/products"
mkdir -p "$OUTPUT_DIR"

BASE_URL="https://generativelanguage.googleapis.com/v1beta/models/nano-banana-pro-preview:generateContent?key=$API_KEY"

declare -A PROMPTS
PROMPTS[rental-property-analyzer]="Professional product mockup photo: A laptop screen showing a detailed Excel spreadsheet for rental property investment analysis with charts showing cash flow projections, key metrics like Cap Rate and Cash-on-Cash Return highlighted in green. Clean desk setup, soft natural lighting, modern minimal office. Photorealistic, 4K quality."
PROMPTS[flip-brrrr-calculator]="Professional product mockup photo: A laptop displaying an Excel spreadsheet for house flipping analysis with a rehab budget breakdown, profit calculator with green GO indicator, and BRRRR refinance analysis. Modern desk with blueprints and calculator nearby. Photorealistic, professional lighting."
PROMPTS[construction-budget-tracker]="Professional product mockup photo: A laptop showing a detailed Excel construction budget spreadsheet with cost categories, a dashboard showing budget vs actual spending chart, change orders section. Construction site photos on wall in background. Clean professional photography."
PROMPTS[development-pro-forma]="Professional product mockup photo: A laptop displaying a sophisticated real estate development pro forma Excel spreadsheet with IRR calculations, waterfall distribution chart, and sources & uses table. Executive desk setup, city skyline view from window. Premium feel, photorealistic."
PROMPTS[contractor-estimate]="Professional product mockup photo: A laptop showing a clean professional contractor estimate template in Excel with itemized line items, company header, and grand total. Work tools (measuring tape, hard hat) artistically placed nearby. Clean photography style."
PROMPTS[hero-banner]="Professional wide banner image for a spreadsheet template website. Clean modern desk with laptop showing Excel charts and real estate data. Warm amber accent lighting. Construction blueprints and financial documents artistically scattered. Premium digital product brand feel. Wide aspect ratio 16:9."

for NAME in rental-property-analyzer flip-brrrr-calculator construction-budget-tracker development-pro-forma contractor-estimate hero-banner; do
  PROMPT="${PROMPTS[$NAME]}"
  OUTPUT="$OUTPUT_DIR/$NAME.png"
  
  if [ -f "$OUTPUT" ]; then
    echo "⏭️  $NAME already exists, skipping"
    continue
  fi
  
  echo "🎨 Generating $NAME..."
  
  RESPONSE=$(curl -s "$BASE_URL" \
    -H "Content-Type: application/json" \
    -d "{
      \"contents\": [{\"parts\": [{\"text\": \"$PROMPT\"}]}],
      \"generationConfig\": {\"responseModalities\": [\"TEXT\", \"IMAGE\"]}
    }")
  
  # Extract base64 image data
  echo "$RESPONSE" | python3 -c "
import sys, json
data = json.load(sys.stdin)
parts = data['candidates'][0]['content']['parts']
for part in parts:
    if 'inlineData' in part:
        import base64
        img_data = base64.b64decode(part['inlineData']['data'])
        with open('$OUTPUT', 'wb') as f:
            f.write(img_data)
        print('✅ Saved $NAME')
        break
else:
    print('❌ No image found in response for $NAME')
    print(json.dumps(data, indent=2)[:500])
"
  
  # Small delay to avoid rate limiting
  sleep 2
done

echo "🎉 Done generating all images!"
ls -la "$OUTPUT_DIR"
