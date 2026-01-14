from rembg import remove
from PIL import Image
import io

input_path = 'src/assets/hero.png'
output_path = 'src/assets/hero_transparent.png'

print(f"Reading image from {input_path}...")
with open(input_path, 'rb') as i:
    input_data = i.read()
    
    print("Removing background...")
    output_data = remove(input_data)
    
    print(f"Saving to {output_path}...")
    with open(output_path, 'wb') as o:
        o.write(output_data)

print("Done!")
