require('dotenv').config()
const Sequelize = require('sequelize')

const {CONNECTION_STRING} = process.env

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    seed: (req, res) => {
        sequelize.query(`
        drop table if exists cc_emp_appts;
        drop table if exists cc_appointments;
        drop table if exists cc_clients;
        drop table if exists cc_employees;
        drop table if exists cc_users;

        create table cc_users (
            user_id serial primary key, 
            first_name varchar(100), 
            last_name varchar(100), 
            email varchar(50), 
            phone_number varchar(15)
        );

        create table cc_employees (
            emp_id serial primary key, 
            user_id integer references cc_users(user_id), 
            position varchar(50), 
            salary integer
        );

        create table cc_clients (
            client_id serial primary key, 
            user_id integer references cc_users(user_id), 
            address varchar(100), 
            city varchar(100), 
            state varchar(2), 
            zip_code integer
        );

        create table cc_appointments (
            appt_id serial primary key, 
            client_id integer references cc_clients(client_id), 
            date timestamp with time zone, 
            service_type varchar(100), 
            notes text,
            approved boolean, 
            completed boolean
        );

        create table cc_emp_appts (
            emp_appt_id serial primary key, 
            emp_id integer references cc_employees(emp_id), 
            appt_id integer references cc_appointments(appt_id)
        );

        insert into cc_users (first_name, last_name, email, phone_number)
        values ('Pennie', 'Benazet', 'pbenazet1@tripadvisor.com', '9138673482'),
            ('Dewey', 'Jiracek', 'djiracek3@kickstarter.com', '9604958684'),
            ('Nani', 'Catonnet', 'ncatonnet6@zimbio.com', '6139042518'),
            ('Fern', 'Rudgerd', 'frudgerd7@globo.com', '4578772961'),
            ('Dianne', 'Pringley', 'dpringley8@addthis.com', '9119902133'),
            ('Tersina', 'Nugent', 'tnugent9@go.com', '2036450489'),
            ('Felicity', 'Galloway', 'fgallowaya@jugem.jp', '8023554681'),
            ('Rosemaria', 'Wildgoose', 'rwildgooseb@blogger.com', '5122434009'),
            ('Torey', 'Roswarne', 'troswarnec@admin.ch', '8556206619'),
            ('Edy', 'Wardlow', 'ewardlowd@1688.com', '1562379171'),
            ('Gisele', 'Dickenson', 'gdickensong@wunderground.com', '2153946722'),
            ('Arty', 'Oughtright', 'aoughtrightk@cdbaby.com', '3424496000'),
            ('Farlay', 'De Zuani', 'fdezuanil@answers.com', '2908736752'),
            ('Park', 'Gimeno', 'pgimenor@army.mil', '6367962878'),
            ('Salvidor', 'Moens', 'smoenss@google.it', '2258019598'),
            ('Hestia', 'Healy', 'hhealyt@tinypic.com', '5346280058'),
            ('Jarred', 'Giraudy', 'jgiraudyu@narod.ru', '9865434528'),
            ('Dannel', 'Cooke', 'dcookev@php.net', '5969305096'),
            ('Leland', 'Tills', 'ltillsw@usgs.gov', '7524958969'),
            ('Sullivan', 'Boddie', 'sboddiex@cbsnews.com', '6738445239'),
            ('Branden', 'Peetermann', 'bpeetermanny@army.mil', '2867603601'),
            ('Lucias', 'Cooksey', 'lcookseyz@eepurl.com', '8705415354'),
            ('Barron', 'Kilbourn', 'bkilbourn10@jimdo.com', '7296835396'),
            ('Flemming', 'Bessant', 'fbessant11@ask.com', '6861504732'),
            ('Ambrosi', 'Shillaker', 'ashillaker12@angelfire.com', '2123397539');

        insert into cc_employees (user_id, position, salary)
        values (1, 'president', 1000000),
            (5, 'vice president', 1000000),
            (6, 'accountant', 1000000),
            (7, 'landscaper', 1000000),
            (9, 'landscaper', 1000000),
            (10, 'landscaper', 1000000),
            (12, 'landscaper', 1000000),
            (13, 'landscaper', 1000000),
            (14, 'landscaper', 1000000),
            (16, 'landscaper', 1000000),
            (19, 'landscaper', 1000000),
            (24, 'landscaper', 1000000),
            (25, 'landscaper', 1000000);

        insert into cc_clients (user_id, address, city, state, zip_code)
        values (2, '34 Sundown Park', 'Las Vegas', 'NV', 89166),
            (3, '35661 Fordem Center', 'Las Vegas', 'NV', 89145),
            (4, '8739 New Castle Avenue', 'Las Vegas', 'NV', 89105),
            (8, '9 Portage Park', 'Las Vegas', 'NV', 89178),
            (11, '480 Golf Center', 'Las Vegas', 'NV', 89115),
            (15, '7 Mayfield Way', 'Las Vegas', 'NV', 89135),
            (17, '896 Lerdahl Park', 'Las Vegas', 'NV', 89105),
            (18, '183 Washington Plaza', 'Las Vegas', 'NV', 89140),
            (20, '73 Karstens Trail', 'Las Vegas', 'NV', 89130),
            (21, '567 Dovetail Court', 'Las Vegas', 'NV', 89155),
            (22, '16724 Old Shore Circle', 'Las Vegas', 'NV', 89150),
            (23, '82 Judy Street', 'Las Vegas', 'NV', 89145);
            
        insert into cc_appointments (client_id, date, service_type, notes, approved, completed)
        values (2, '2021-05-04T11:00:00.000Z', 'tree trimming', '', true, true),
            (3, '2021-06-16T12:30:00.000Z', 'sprinklers', 'Fixed sprinkler head in northeast corner of the backyard', true, true),
            (4, '2021-06-04T10:30:00.000Z', 'weeds', '', true, false),
            (5, '2021-06-17T15:00:00.000Z', 'maintenance ', '', true, false),
            (6, '2021-10-07T13:30:00.000Z', 'pest control', '', true, true),
            (7, '2021-06-28T09:30:00.000Z', 'weeds', 'Sprayed for dandelions', true, true),
            (8, '2021-08-30T10:30:00.000Z', 'tree trimming', '', true, true),
            (9, '2021-03-11T14:00:00.000Z', 'weeds', '', true, true),
            (10, '2021-06-15T07:30:00.000Z', 'weeds', '', true, true),
            (11, '2021-09-09T10:00:00.000Z', 'sprinklers', '', true, false),
            (12, '2021-10-17T14:00:00.000Z', 'maintenance ', '', true, false),
            (1, '2021-07-18T08:30:00.000Z', 'maintenance ', '', true, false),
            (2, '2021-07-02T14:00:00.000Z', 'weeds', '', true, true),
            (3, '2021-01-27T14:30:00.000Z', 'weeds', '', true, true),
            (4, '2021-04-18T07:30:00.000Z', 'tree trimming', '', true, false),
            (5, '2021-02-12T09:00:00.000Z', 'weeds', '', true, true),
            (6, '2021-08-11T14:00:00.000Z', 'pest control', '', true, true),
            (7, '2020-12-02T12:30:00.000Z', 'weeds', '', true, true),
            (8, '2021-02-02T07:00:00.000Z', 'maintenance ', 'Switched to doing only front yard', true, true),
            (9, '2020-11-09T10:30:00.000Z', 'sprinklers', '', true, true),
            (10, '2021-10-18T07:30:00.000Z', 'maintenance ', '', true, true),
            (11, '2021-04-27T09:00:00.000Z', 'weeds', '', true, true),
            (12, '2021-05-26T11:00:00.000Z', 'maintenance ', '', true, true),
            (1, '2020-11-28T13:30:00.000Z', 'pest control', 'Major ant problem, recommended they schedule a follow up', true, true),
            (2, '2020-12-04T12:00:00.000Z', 'tree trimming', '', true, true),
            (3, '2021-04-14T08:00:00.000Z', 'weeds', '', true, true),
            (4, '2021-07-31T15:00:00.000Z', 'maintenance ', '', true, false),
            (5, '2020-12-29T14:30:00.000Z', 'maintenance ', '', true, false),
            (6, '2021-01-09T11:30:00.000Z', 'maintenance ', '', true, false),
            (7, '2021-07-09T08:00:00.000Z', 'weeds', '', true, true),
            (8, '2021-02-27T11:00:00.000Z', 'tree trimming', '', true, true),
            (9, '2021-07-24T11:00:00.000Z', 'tree trimming', '', true, true),
            (10, '2021-08-12T14:30:00.000Z', 'sprinklers', '', true, true),
            (11, '2020-12-11T11:30:00.000Z', 'maintenance ', '', true, false),
            (12, '2021-10-05T15:00:00.000Z', 'pest control', '', true, false),
            (1, '2020-12-23T12:00:00.000Z', 'weeds', '', true, true),
            (2, '2021-03-10T13:30:00.000Z', 'tree trimming', '', true, true),
            (3, '2021-07-08T08:00:00.000Z', 'weeds', '', true, true),
            (4, '2020-12-08T14:30:00.000Z', 'sprinklers', '', true, false);

        insert into cc_emp_appts (emp_id, appt_id)
        values (13, 39),
            (12, 39),
            (11, 38),
            (10, 38),
            (9, 37),
            (8, 37),
            (7, 36),
            (6, 36),
            (5, 35),
            (4, 35),
            (13, 34),
            (12, 34),
            (11, 33),
            (10, 33),
            (9, 32),
            (8, 32),
            (7, 31),
            (6, 31),
            (5, 30),
            (4, 30),
            (13, 29),
            (12, 29),
            (11, 28),
            (10, 28),
            (9, 27),
            (8, 27),
            (7, 26),
            (6, 26),
            (5, 25),
            (4, 25),
            (13, 24),
            (12, 24),
            (11, 23),
            (10, 23),
            (9, 22),
            (8, 22),
            (7, 21),
            (6, 21),
            (5, 20),
            (4, 20),
            (13, 19),
            (12, 19),
            (11, 18),
            (10, 18),
            (9, 17),
            (8, 17),
            (7, 16),
            (6, 16),
            (5, 15),
            (4, 15),
            (13, 14),
            (12, 14),
            (11, 13),
            (10, 13),
            (9, 12),
            (8, 12),
            (7, 11),
            (6, 11),
            (5, 10),
            (4, 10),
            (13, 9),
            (12, 9),
            (11, 8),
            (10, 8),
            (9, 7),
            (8, 7),
            (7, 6),
            (6, 6),
            (5, 5),
            (4, 5),
            (13, 4),
            (12, 4),
            (11, 3),
            (10, 3),
            (9, 2),
            (8, 2),
            (7, 1),
            (6, 1);
        `).then(() => {
            console.log('DB seeded!')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))
    }
}





