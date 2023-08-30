from tinygrad.tensor import Tensor

tensor = Tensor([1, 2, 3, 4, 5, 6])
tensor = tensor.cos()

print(tensor.numpy())
