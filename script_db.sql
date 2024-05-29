CREATE DATABASE dbapicarros;

use dbapicarros;

CREATE TABLE carros
(
	codigo int primary key auto_increment,
	modelo varchar(30),
    placa varchar(7)
);

insert into carros (modelo, placa) values ('Fuscão Preto','ASD1234');
insert into carros (modelo, placa) values ('Honda Fit','RRR4444');
select * from carros;