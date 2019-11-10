def riders(stations):
    """
    >>> riders([43,23,40,13])
    2
    >>> riders([33, 8, 16, 47, 30, 30, 46])
    3
    >>> riders([6, 24, 6, 8, 28, 8, 23, 47, 17, 29, 37, 18, 40, 49])
    4
    >>> riders([43, 32, 34, 36, 46, 5, 7, 31, 28, 48, 34])
    5
    """
    riders = 1
    current_miles = 0
    for x in stations:
        if (current_miles + x) > 100: 
            riders += 1
            current_miles = x
        elif (current_miles + x) <= 100:
            current_miles += x
    return riders

if __name__ == "__main__":
    import math
    # import doctest
    # doctest.testmod()

    riders([43, 32, 34, 36, 46, 5, 7, 31, 28, 48, 34])
    riders([47, 21, 15, 11, 28, 21, 44, 47, 24, 46, 38, 20])