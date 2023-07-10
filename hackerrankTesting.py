#%%
import math
import os
import random
import re
import sys
#%%
#
# Complete the 'plusMinus' function below.
#
# The function accepts INTEGER_ARRAY arr as parameter.
#
arr = [-4, 3, -9, 0, 4]
count = len(arr)

print("count-" + str(count))

my_list = [1, 2, 3, 4, 5]
index = 0

while index < len(my_list):
    print(my_list[index])
    index += 1
value = 2
rounded_value = round(value,4)
print(rounded_value)

#%%

def plusMinus(arr):
    count = len(arr)
    negative = 0
    positive = 0    
    zero = 0
    index = 0
    while index < count:
        if arr[index] < 0:
            negative = negative +1
        elif arr[index] > 0:
            positive = positive +1
        elif arr[index] == 0:
            zero = zero +1
        index +=1

    negativeDecimal = negative / count
    positiveDecimal = positive / count
    zeroDecimal = zero / count

    positiveDecimal = "{:.4f}".format(positiveDecimal)
    negativeDecimal = "{:.4f}".format(negativeDecimal)
    zeroDecimal = "{:.4f}".format(zeroDecimal)

    print(positiveDecimal)
    print(negativeDecimal)
    print(zeroDecimal)

plusMinus(arr)

#%%
if __name__ == '__main__':
    n = int(input().strip())

    arr = list(map(int, input().rstrip().split()))

    plusMinus(arr)

# %%

#
# Complete the 'miniMaxSum' function below.
#
# The function accepts INTEGER_ARRAY arr as parameter.
#
arr = [10, 8, 2, 1, 4]
count = len(arr)
arr.sort()

minArr = arr.copy()
maxArr = arr.copy()
min = arr[0]
max = arr[count-1]
maxArr.remove(min)
minArr.remove(max)

minSum= 0
index = 0
while index<count-1:
    minSum = minArr[index] + minSum
    index+=1

maxSum= 0
index = 0
while index<count-1:
    maxSum = maxArr[index] + maxSum
    index+=1

#%%
def miniMaxSum(arr):
    count = len(arr)
    arr.sort()

    minArr = arr.copy()
    maxArr = arr.copy()
    min = arr[0]
    max = arr[count-1]
    maxArr.remove(min)
    minArr.remove(max)

    minSum= 0
    index = 0
    while index<count-1:
        minSum = minArr[index] + minSum
        index+=1

    maxSum= 0
    index = 0
    while index<count-1:
        maxSum = maxArr[index] + maxSum
        index+=1

    print(minSum, maxSum)

#%%
if __name__ == '__main__':

    arr = list(map(int, input().rstrip().split()))

    miniMaxSum(arr)


# %%
time = "01:05:45PM"

if time[-2:] == "AM":
    if time[:2] == "12":
        military_time = "00" + time[2:-2]
    else:
        military_time = time[:-2]
else:
    if time[:2] == "12":
        military_time = time[:-2]
    else:
        military_time = str(int(time[:2]) + 12) + time[2:-2]

print(military_time)  # Output: 19:05:45

#%%

def timeConversion(time):

    if time[-2:] == "AM":
        if time[:2] == "12":
            military_time = "00" + time[2:-2]
        else:
            military_time = time[:-2]
    else:
        if time[:2] == "12":
            military_time = time[:-2]
        else:
            military_time = str(int(time[:2]) + 12) + time[2:-2]

    print(military_time)
    return military_time

if __name__ == '__main__':
    # fptr = open(os.environ['OUTPUT_PATH'], 'w')

    s = input()

    result = timeConversion(s)
    print(result)

    # fptr.write(result + '\n')

    # fptr.close()
# %%
scores = [12,24,10,24]
gameZero = scores[0]
# print(gameZero)
highScore = gameZero
lowScore = gameZero
i=1
highRecords = 0
lowRecords = 0 
while i<len(scores):

    # print(scores[i])
    if scores[i] > highScore:
        highScore = scores[i]
        highRecords = highRecords+1
    if scores[i] < lowScore:
        lowScore = scores[i]
        lowRecords = lowRecords+1
    i+=1

records =[highRecords,lowRecords]
print(records)





# %%

#%%
def breakingRecords(scores):
    gameZero = scores[0]
    # print(gameZero)
    highScore = gameZero
    lowScore = gameZero
    i=1
    highRecords = 0
    lowRecords = 0 
    while i<len(scores):

        # print(scores[i])
        if scores[i] > highScore:
            highScore = scores[i]
            highRecords = highRecords+1
        if scores[i] < lowScore:
            lowScore = scores[i]
            lowRecords = lowRecords+1
        i+=1

    records =[highRecords,lowRecords]
    # print(records)
    return highRecords, lowRecords





if __name__ == '__main__':
   

    n = int(input().strip())

    scores = list(map(int, input().rstrip().split()))

    result = breakingRecords(scores)
    print (result[0],result[1])

    


# %%
