not(X) :- X, !, fail.
not(_).

fly(Departure, Departure ) :-
    write( 'Departure and Arrival airports are the same' ),
    !, fail.