#ejercicio de un bucle for para recorer desde el 1 hasta el 100 pupolar fizzbuzz

# for i in range (1,101):
#     if i % 3 == 0 and i % 5 == 0: 
#           print ('fizzbuzz')
#     elif i % 5 == 0:
#           print ('buzz')
#     elif i % 3 == 0:
#          print('fizz')
#     else:
#         print(i)
  
# ejercicio para mirar si 2 palabras son iguales

def son_anagramas (palabra1, palabra2):
    if palabra1.lower() == palabra2.lower():

        return False
    
    return sorted(palabra1.lower()) == sorted(palabra2.lower())
    
print (son_anagramas ('Amor', 'Roma'))
print (son_anagramas ('Amor', 'Roma_'))
print (son_anagramas ('AmLr', 'Roma_'))
print (son_anagramas ('AmIr', 'Roma_'))
print (son_anagramas ('Amor', 'amoR'))
print (son_anagramas ('roma_', 'Roma_'))

