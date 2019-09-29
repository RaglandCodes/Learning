import tensorflow as tf
from tensorflow import keras
import numpy as np
import matplotlib.pyplot as plt

data = keras.datasets.fashion_mnist

(train_images, train_labels), (test_images, test_lables) = data.load_data()
['T-shirt/top',	'Trouser', 'Pullover',	'Dress',	'Coat',	'Sandal','Shirt', 'Sneaker',	'Bag',	'Ankle', 'boot']

plt.imshow(train_images[7])
plt.show()