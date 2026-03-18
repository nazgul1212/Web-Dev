def count_evens(nums):
    count = 0
    for n in nums:
        if n % 2 == 0:
            count += 1
    return count

print(count_evens([2, 1, 2, 3, 4]))