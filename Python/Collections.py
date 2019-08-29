'''
Done by following this tutorial https://www.youtube.com/watch?v=UdcPhnNjSEw
'''
from collections import Counter
from collections import namedtuple
from collections import OrderedDict
from collections import defaultdict
from collections import deque

# Counter

a = "ababababcaccbbacbacbcacacacacacacb"

my_counter = Counter(a)

print("my_counter = ", my_counter)
print("\n\ntype(my_counter) => ", type(my_counter))
print("\n\nmost common letter = ", my_counter.most_common(1)[0][0])
print("elements sorted by occurace = ", list(my_counter.elements()))

# namedtuple

Point = namedtuple('Point', 'x, y') #Creates a class called point with the fields x and y
pt = Point(1 , 4)

print("\n\npt =  ", pt)

# OrderedDict
# Ordered dict remembers the order in which they were inserted

oredered_dict = OrderedDict()

oredered_dict['a'] = 1
oredered_dict['d'] = 4
oredered_dict['b'] = 2
oredered_dict['c'] = 3

print("\n\noredered_dict = ", oredered_dict)

#defaultdict
# Gives default value if key hasn't been set yet

d = defaultdict(int)

d['a'] = 'alpha'
d['b'] = 'beta'

print("\n\n d['c'] = ", d['c'])

#deque
# double ended qeueeue (I don't know the spelling !!)

d = deque()

d.append(1)
d.append(2)

d.appendleft(44)
d.appendleft(33)
d.appendleft(22)

d.extend([44, 55, 66])
d.extendleft([0, -2, -6])

print("d = ", d)
d.rotate()
print("rotated d = ", d)
