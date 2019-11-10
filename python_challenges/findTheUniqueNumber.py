def uniqueNumber(someNumbers):
    """
    >>> uniqueNumber([5,5,5,5,5,5,5,5,5,7,5,5,5,5,5,5])
    7
    """
    # if someNumbers.count(min(someNumbers)) == 1:
        # return min(someNumbers)
    # else:
        # return max(someNumbers)

    return dict(get(a)
         

if __name__ == "__main__":
    import doctest
    doctest.testmod()