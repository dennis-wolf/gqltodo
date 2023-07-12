CREATE TABLE
  public.todo (
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY,
    title text NOT NULL,
    description text NULL,
    last_updated timestamp
    with
      time zone NOT NULL,
      state text NOT NULL,
      parent_todo bigint NULL
  );

ALTER TABLE
  public.todo
ADD
  CONSTRAINT todo_pkey PRIMARY KEY (id)