def centered_average(nums):
    
    total_sum = sum(nums)
    

    centered_sum = total_sum - max(nums) - min(nums)
    return centered_sum // (len(nums) - 2)


print(centered_average([1, 2, 3, 4, 100]))