INSERT INTO 
  users (firstname, lastname, email, password)
VALUES
  ('James', 'Bonds', 'james.bond@gmail.com', 'b6b7fb4cad4bc020f76e16889a8e9065cb708d0f8c304a8a3db609b644da9536'),
  ('Tonyyy', 'Stark', 'starkrulz@gmail.com', 'b6b7fb4cad4bc020f76e16889a8e9065cb708d0f8c304a8a3db609b644da9536'),
  ('Aliii', 'G', 'hello@gmail.com', '3b5fe14857124335bb8832cc602f8edcfa12db42be36b135bef5bca47e3f2b9c');

INSERT INTO 
  schedules (user_id, day, start_at, end_at)
VALUES
  (1, 1, '2000-01-01 8:00', '2000-01-01 13:00'),
  (1, 2, '2000-01-01 12:00', '2000-01-01 17:00'),
  (1, 3, '2000-01-01 8:00', '2000-01-01 14:00'),
  (2, 3, '2000-01-01 12:00', '2000-01-01 17:00'),
  (2, 4, '2000-01-01 12:00', '2000-01-01 17:00'),
  (3, 4, '2000-01-01 8:00', '2000-01-01 15:00'),
  (3, 5, '2000-01-01 8:00', '2000-01-01 15:00');
