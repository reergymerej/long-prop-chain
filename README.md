## Problem

I want to show an element based on context.  The same component tree is used in
both contexts.

What ways can I flip the prop?



### Connect

Keep the lowest component dumb, but wrap it in a connected component that can
read the app state and figure out if it should set the flag.

-NOPE-


This may work, when these components exist exclusively, as we could use part of
the application's state to set a generic "in the right context" flag, but they
can't work together.



### Examine the URL

Look at the current location to figure out if we want to show it.

-NOPE-

Again, in addition to this being poor form, we're examing the app's state to
make the decision.  This could work, but not if the components exist at the same
time.



### Pass Props

We can pass props way down, but intermediate components will be responsible for
them and won't necesarrily use them.



### Inversion of Control

Build the component tree differently in each place.
