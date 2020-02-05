use week2_part3_homework;

-- 1.Get all the tasks assigned to users whose email ends in @spotify.com
select *
from user 
where email like '%@spotify.com';

-- 2.Get all the tasks for 'Donald Duck' with status 'Not started'
select user.name as user_name, status.name as status_name, task.*
from task 
inner join status on status.id = task.status_id
inner join user_task on user_task.task_id = task.id
inner join user on user_task.user_id = user.id
where user.name='Donald Duck' and status.name = 'Not started'; 

-- 3.Get all the tasks for 'Maryrose Meadows' that were created in september
select user.name, task.*
from user
inner join user_task on user.id = user_task.user_id
inner join task on task.id= user_task.task_id
where user.name = 'Maryrose Meadows' and month(created)=9;

-- 4.Find how many tasks where created in each month
select count(*) as total_tasks, monthname(created) as month
from task
group by monthname(created);

