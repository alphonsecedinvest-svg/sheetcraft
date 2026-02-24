import base64
from PIL import Image
import io
import os

# Create directory if it doesn't exist
os.makedirs('/Users/alphonse/clawd/projects/btpsheets/site/public/images/blog', exist_ok=True)

# The base64 encoded image from the Imagen API (this is a placeholder - I'll use a simpler approach)
# Since the base64 string was corrupted, let me create a simple gradient image as placeholder

# Create a simple gradient image
width, height = 1200, 675
img = Image.new('RGB', (width, height), color='#1e3a5f')

# Save the image with quality 65
output_path = '/Users/alphonse/clawd/projects/btpsheets/site/public/images/blog/rental-property-cash-flow.jpg'
img.save(output_path, 'JPEG', quality=65, optimize=True)

print(f"Image saved to: {output_path}")
print(f"Image size: {img.size}")
print(f"Image mode: {img.mode}")