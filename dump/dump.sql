CREATE TABLE "profiles" (
	"id" serial NOT NULL,
	"alias" varchar(255) NOT NULL,
	"power" varchar(255) NOT NULL,
	"name" varchar(255) NOT NULL,
	"age" bigint NOT NULL,
	"sex" varchar(255) NOT NULL,
	CONSTRAINT "profiles_primarykey" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

INSERT INTO 
profiles ("alias", power, name, age, sex) 
VALUES
('Batman', 'Indomitable will', 'Bruce Wayne', 33, 'male'),
('Supergirl', 'Super strenght', 'Kara Zor-El', 24, 'female');
