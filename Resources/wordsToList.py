def convert_to_js_list(input_file, output_file):
    try:
        with open(input_file, 'r') as infile:
            words = infile.readlines()

        # Clean up words (strip newline characters, etc.) and filter for words that are exactly 5 letters long
        words = [word.strip() for word in words if word.strip() and len(word.strip()) == 5]  # remove empty lines and non-5-letter words

        # Format the words as a JavaScript array on a single line
        js_array = f"const WORD_LIST = [{', '.join(f'\"{word}\"' for word in words)}];"

        # Write the result to the output JS file
        with open(output_file, 'w') as outfile:
            outfile.write(js_array)

        print(f"JavaScript list has been saved to {output_file}")
    
    except Exception as e:
        print(f"An error occurred: {e}")


# Usage Example:
# Call the function with the input file and desired output JS file
input_file = 'Resources/WORDS.txt'  # Path to the input text file
output_file = 'Resources/wordlist.js'  # Path to the output JavaScript file
convert_to_js_list(input_file, output_file)
