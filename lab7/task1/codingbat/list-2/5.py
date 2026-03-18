def sum67(nums):
    total = 0
    skipping = False  
    
    for n in nums:
        if n == 6:
            skipping = True
        
        if not skipping:
            total += n
            
        if skipping and n == 7:
            skipping = False
            
    return total


print(sum67([1, 2, 2]))