'''
This was done by following this tutorial https://www.youtube.com/watch?v=yNzxXZfkLUA

Decorators are used to add featurs to existing function.

Assume we want to add a feature to the div function where it always has the divisor smaller than the divident

'''
def div(a, b):
        return a/b

def smart_div(func):
        def inner (a, b):
                if a<b:
                        a, b = b, a
                
                return func(a, b)
        
        return inner

div = smart_div(div)
print(div(4, 12))
