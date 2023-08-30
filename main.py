from tinygrad.tensor import Tensor

out = Tensor([1, 2, 3, 4])
y = Tensor([1, 2, 3, 4])

loss = out.mul(y).mean()

loss = loss.backward()

print(loss)
