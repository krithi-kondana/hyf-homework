use week2_part1_homework;

select *
from task;

-- 1.Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
insert into task (title, description, created, updated, due_date, status_id, user_id) values ('learn coding', 'javascript, database', now(), now(), '2020-06-16 00:00:00', 1, 3);

-- 2.Change the title of a task
update task
set title='dry the clothes'
where id=1;

-- 3.Change a task due date
update task
set due_date = '2020-02-02 00:00:00'
where id=1;

-- 4.Change a task status
update task
set status_id = '3'
where id=1;

-- 5.Mark a task as complete
update task
set status_id = '3'
where id=17;

-- 6.Delete a task
delete
from task
where id=8;