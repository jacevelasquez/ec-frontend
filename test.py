
'''
Description
Write a program that, given a string, outputs a new string that contains each character in the original string exactly one time, 
followed by the frequency of occurrences of that character in the original string, and in alphabetical order. Characters recognition should be case insensitive.
Input
Create a variable input, and provide a string value of "description"
Output
Print to standard output the new string comprised of each character followed by its frequency. Print out each result on a new line.
Expected Output
'''

inp = 'description'

def sort_inp(inp):
    sorted_inp = sorted(inp)
    
    val = ""
    freq = {}
    
    for char in sorted_inp:
        if char.isalpha():  # Only consider alphabetic characters
            if char in freq:
                freq[char] += 1
            else:
                freq[char] = 1

    for f in freq:
        val += f'{f}{freq[f]}'            

    print(val)
    return val

sort_inp('description')

