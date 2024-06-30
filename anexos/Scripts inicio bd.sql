
ALTER TABLE public."Reservations" DROP CONSTRAINT "Reservations_cancelled_key";

INSERT INTO public."People"
(id, names, "lastNames", "typeDocument", "numberDocument", email, gender, birthdate, phone, "password", "userId", "cityId")
VALUES(nextval('"People_id_seq"'::regclass), 'Edgar Alexander', 'Díaz Murillo', 'CC', '80016199', 'eadiazm@gmail.com', 'M', '1977-07-30', '3134258856', '123', null, 74539);

INSERT INTO public."Tutors"
(id, profession, "personId")
VALUES(nextval('"Tutors_id_seq"'::regclass), 'Ingeniero de sistemas especializado en PHP', 1);

INSERT INTO public."People"
(id, names, "lastNames", "typeDocument", "numberDocument", email, gender, birthdate, phone, "password", "userId", "cityId")
VALUES(nextval('"People_id_seq"'::regclass), 'Sandra Paola', 'Olarte Casallas', 'CC', '50645897', 'solarte@gmail.com', 'F', '1978-05-06', '3002583691', '123', null, 74589);

INSERT INTO public."Students"
(id, "personId")
VALUES(nextval('"Students_id_seq"'::regclass), 2);

INSERT INTO public."People"
(id, names, "lastNames", "typeDocument", "numberDocument", email, gender, birthdate, phone, "password", "userId", "cityId")
VALUES(nextval('"People_id_seq"'::regclass), 'Mario', 'Moreno', 'CC', '78525252', 'mmoreno@gmail.com', 'M', '1985-06-01', '3004444691', '123', null, 75000);

INSERT INTO public."Students"
(id, "personId")
VALUES(nextval('"Students_id_seq"'::regclass), 3);

INSERT INTO public."ReservationTypes"
(id, description)
VALUES(nextval('"ReservationTypes_id_seq"'::regclass), 'Presencial');
INSERT INTO public."ReservationTypes"
(id, description)
VALUES(nextval('"ReservationTypes_id_seq"'::regclass), 'Virtual');
INSERT INTO public."ReservationTypes"
(id, description)
VALUES(nextval('"ReservationTypes_id_seq"'::regclass), 'Mixta');

INSERT INTO public."Reservations"
(id, "date", date_start, date_end, cancelled, "studentId", "tutorId", "reservationTypeId")
VALUES(nextval('"Reservations_id_seq"'::regclass), '2024-07-07', '2024-07-10', '2024-07-15', 'Active'::text, 1, 1, 2);


INSERT INTO public."Reservations"
(id, "date", date_start, date_end, cancelled, "studentId", "tutorId", "reservationTypeId")
VALUES(nextval('"Reservations_id_seq"'::regclass), '2024-07-07', '2024-08-10', '2024-08-15', 'Active'::text, 2, 1, 1);


