# stayClassy

There comes a time when you want to join some CSS classnames together in your JS files. You can jump through hoops or
you can use a simple little utility such as **stayClassy**, which has no dependencies. It's tiny.

Put this in:

```
import stayClassy from 'stayClassy';

stayClassy(
    ['fixed-one', 'fixed-two'],
    {
        'dynamic-one': somethingThatEquatesToTrue,
        'dynamic-two': !somethingThatEquatesToTrue,
    }
);
```

This comes out:
`fixed-one fixed-two dynamic-one`.
