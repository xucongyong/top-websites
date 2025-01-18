import os
import shutil
from pathlib import Path
import argparse
from MarkdownTranslator import MdTranslater
import shutil
# Directory containing markdown files to translate
output_dir = "/Users/xucongyong/mathematics/xucongyong.com/src/app/_articles"

input_dir = [
"/Users/xucongyong/mathematics/xucongyong.com/markdown/fogg_behavior_model.md",
"/Users/xucongyong/mathematics/xucongyong.com/markdown/quant/vnpy_tutorial/",
]
# 
class BatchTranslator:
    def __init__(self):
        self.target_languages = {
            'en': 'english',
            'zh': 'chinese',
            'de': 'de'
        }

    def process_file(self, input_file: str):
        """Process a single markdown file for translation."""
        print(f"Processing file: {input_file}")
        
        # Get the base path and filename
        base_path = os.path.dirname(input_file)
        filename = os.path.basename(input_file)
        name_without_ext = os.path.splitext(filename)[0]

        # Create translation arguments
        parser = argparse.ArgumentParser()
        parser.add_argument('-f', type=Path, nargs="+")
        args = parser.parse_args([])
        args.f = [Path(input_file)]  # Set the input file path
        
        # Translate using MdTranslater
        translator = MdTranslater(args)
        translator.main()
        print('translator done')

        for lang_code, language in self.target_languages.items():
            # First save with language suffix
            temp_output_path = os.path.join(
                base_path, 
                f"{name_without_ext}.{lang_code}.md"
            )
            
            # Move to final destination
            final_output_path = os.path.join(
                output_dir,
                lang_code,
                f"{name_without_ext}.md"
            )

            print(f"Moving {temp_output_path} to {final_output_path}")
            
            # Create target directory if it doesn't exist
            os.makedirs(os.path.dirname(final_output_path), exist_ok=True)
            
            # Move the file
            if os.path.exists(temp_output_path):
                shutil.move(temp_output_path, final_output_path)
                print(f"Created translation: {final_output_path}")
                # Delete the temp file
                # os.remove(temp_output_path)
            else:
                print(f"Warning: Translation file not found: {temp_output_path}")

def translator_file(input_file):
    translator = BatchTranslator()
    # Create temp directory if it doesn't exist
    temp_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "temp")
    if not os.path.exists(temp_dir):
        os.makedirs(temp_dir)
    
    # Get the filename from the input path
    file_name = os.path.basename(input_file)
    
    # Create the temp file path
    temp_file_path = os.path.join(temp_dir, file_name)
    
    # Copy the input file to temp directory
    shutil.copy2(input_file, temp_file_path)
    
    print(f"Processing file: {temp_file_path}")
    translator.process_file(temp_file_path)
    
    # Clean up by removing the entire temp directory
    try:
        shutil.rmtree(temp_dir)
        print(f"Removed temp directory: {temp_dir}")
    except Exception as e:
        print(f"Error removing temp directory: {e}")

def main():
    # Process all markdown files in the input directory
    for input_temp in input_dir:
        if input_temp.endswith('.md'):
            translator_file(input_temp)
        else:
            for file in os.listdir(input_temp):
                if file.endswith('.md'):
                    input_file = os.path.join(input_temp, file)
                    translator_file(input_file)

if __name__ == "__main__":
    main()
