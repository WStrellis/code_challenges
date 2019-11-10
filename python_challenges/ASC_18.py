
def str_count(strng, letter):
    """ 
    >>> str_count("hello","l")
    2
    >>> str_count("hello","j")
    0
    >>> str_count("","j")
    0
    """
    return strng.count(letter)

if __name__ == "__main__":
    import doctest
    doctest.testmod()