import tensorflow as tf
from tensorflow import keras
import numpy as np
import matplotlib.pyplot as plt

from keras.layers import Activation, Dense

print("TFV", tf.__version__)
data = keras.datasets.fashion_mnist

(train_images, train_labels), (test_images, test_lables) = data.load_data()
class_name = ['T-shirt/top',	'Trouser', 'Pullover',	'Dress',	'Coat',	'Sandal','Shirt', 'Sneaker',	'Bag',	'Ankle', 'boot']

test_images = test_images/ 255.0
train_images = train_images/255.0

model = keras.Sequential([
    keras.layers.Flatten(),
    keras.layers.Dense(128, activation='relu'),
    keras.layers.Dense(10, activation='softmax')
])

model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])

model.fit(train_images, train_labels, epochs=5)

test_loss, test_acc = model.evaluate(test_images, test_lables)

print("\nAccuracy = ", test_acc)

prediction = model.predict(test_images)
print(prediction)

