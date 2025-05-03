PROGRAM FinalPivo(INPUT, OUTPUT);
USES
  DOS;

FUNCTION GetQueryStringParameter(Key: STRING): STRING;
VAR
  Str: STRING;
  Index: INTEGER;
BEGIN
  Str := GetEnv('QUERY_STRING');
  Index := Pos(Key + '=', Str);
  IF Index = 0
  THEN
    GetQueryStringParameter := ''
  ELSE
    GetQueryStringParameter := Copy(Str, Pos(Index, Str))//Copy(Copy(Str, Pos(Index, Str)), Length(Key) + 1 , Pos('&', Copy(Str, Pos(Index, Str))) - Length(Key) - 1)
END;

BEGIN
  WRITELN('Content-Type: text/plain');
  WRITELN;
  WRITELN(GetQueryStringParameter('A'))
END.