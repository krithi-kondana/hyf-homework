use meal_application;

-- 1.Get all meals
select * from meal;

-- 2.Add a new meal
insert into meal (title,description,location,`when`,max_reservations,price,created_date) values ('pizza','margherita','sydhavn','2020-02-22 13:30:20','6','65','2020-02-21');

-- 3.Get a meal with any id, fx 1
select *
from meal
where id=1;

-- 4.Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
update meal
set title = 'KFC burger'
where id=1;

-- 5.Delete a meal with any id, fx 1
delete from meal
where id=2;





-- 1.Get all reservations
select * from reservation;

-- 2.Add a new reservation
insert into reservation (number_of_guests,meal_id,created_date) values ('1',6,'2020-02-21');

-- 3.Get a reservation with any id, fx 1
select *
from reservation
where id=1;

-- 4.Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
update reservation
set number_of_guests = '2'
where id=1;

-- 5.Delete a reservation with any id, fx 1
delete from reservation
where id=2;





-- 1.Get all reviews
select * from review;

-- 2.Add a new review
insert into review (title,description,meal_id,stars) values ('fantastic','tasty food',6,'5');

-- 3.Get a review with any id, fx 1
select *
from review
where id=3;

-- 4.Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
update review
set title = 'very nice'
where id=4;

-- 5.Delete a review with any id, fx 1
delete from review
where id=2;



-- additional queries
-- 1.Get meals that has a price smaller than a specific price fx 90
select *
from meal
where price < '70';

-- 2.Get meals that still has available reservations
select meal.id,meal.title, meal.max_reservations, sum(reservation.number_of_guests) as total_guests
from meal inner join reservation on reservation.meal_id = meal.id
group by meal.id
having meal.max_reservations > total_guests;

-- 3.Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
select * 
from meal
where title like '%Rød grød med%';

-- 4.Get meals that has been created between two dates
select *
from meal
where created_date > '2020-02-20' and created_date < '2020-02-28';

-- 5.Get only specific number of meals fx return only 5 meals
select *
from meal
limit 3;

-- 6.Get the meals that have good reviews
select meal.title, meal.description, review.*
from meal inner join review on review.meal_id = meal.id
where review.stars > '3';

-- 7.Get reservations for a specific meal sorted by created_date
select meal.title, reservation.*
from meal inner join reservation on reservation.meal_id = meal.id
order by reservation.created_date;

-- 8.Sort all meals by average number of stars in the reviews
select meal.title, AVG(review.stars) as average_stars
from meal inner join review on review.meal_id = meal.id
group by meal.id
order by average_stars desc;
