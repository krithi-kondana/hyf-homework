-- 1.Find out how many tasks are in the task table
select count(*) 
from task;

-- 2.Find out how many tasks in the task table do not have a valid due date
select count(*)
from task
where due_date IS NULL;

-- 3.Find all the tasks that are marked as done
select task.*, status.name
from status inner join task on status.id = task.status_id
where status.name='Done';

-- 4.Find all the tasks that are not marked as done
select task.*, status.name
from status inner join task on status.id = task.status_id
where status.name!='Done';

-- 5.Get all the tasks, sorted with the most recently created first
select *
from task
order by created desc;

-- 6.Get the single most recently created task
select *
from task
order by created desc
limit 1;

-- 7.Get the title and due date of all tasks where the title or description contains database
select title, due_date
from task
where title LIKE '%database%' or description LIKE '%database%';

-- 8.Get the title and status (as text) of all tasks
select task.title, status.name AS status
from status inner join task on status.id = task.status_id;

-- 9.Get the name of each status, along with a count of how many tasks have that status
select count(*), status.name AS status
from status inner join task on status.id = task.status_id
group by status;

-- 10.Get the names of all statuses, sorted by the status with most tasks first
select count(*), status.name
from status inner join task on status.id = task.status_id
group by status.name
order by count(*) desc;
