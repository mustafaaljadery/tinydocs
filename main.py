from tinygrad.tensor import Tensor

tensor = Tensor([-1, -5, 1, 2, 3, 4, 5])
tensor = tensor.exp()

print(tensor.numpy())
