# stayClassy

There comes a time when you want to join some CSS classnames together in your JS files. You can jump through hoops or
you can use a simple little utility such as **stayclassy**, which has no dependencies. It's tiny.

Put this in:

```js
import stayClassy from 'stayclassy';

…

const classnames = stayClassy(
    ['fixed-one', 'fixed-two'],
    {
        'dynamic-one': somethingThatEquatesToTrue,
        'dynamic-two': somethingThatEquatesToFalse,
    }
);

return <div className={classnames}>today’s empires, tomorrow’s ashes</div>

…
```

This comes out:
`fixed-one fixed-two dynamic-one`.
