def max_end3(nums):
    big = max(nums[0], nums[-1])

    return [big] * 3

print(max_end3([1, 2, 3]))