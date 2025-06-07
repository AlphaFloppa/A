PROGRAM FinalPivo(INPUT, OUTPUT);
USES
  DOS;

FUNCTION GetQueryStringParameter(Key: STRING): STRING;
VAR
  S, Temp: STRING;
  Index: INTEGER;
BEGIN
    S := GetEnv('QUERY_STRING');
    IF S = ''
    THEN
        GetQueryStringParameter := ''
    ELSE
        BEGIN
            Index := Pos('&' + Key + '=', S);
            IF Index = 0
            THEN
                 BEGIN      	
                      Index := Pos(Key + '=', S);   
	    IF Index = 1
	    THEN
	        BEGIN
	             Temp := Copy(S, 1+Length(Key)+1);
	              IF(Pos('&', Temp) <> 0)
	              THEN
	                   GetQueryStringParameter := Copy(Temp, 1, Pos('&', Temp)-1)
	               ELSE
	                    GetQueryStringParameter := Copy(Temp, 1)
	        END
                      ELSE
                          GetQueryStringParameter := ''                           
	END
            ELSE
                 BEGIN
	     Temp := Copy(S, Index+Length(Key)+2);
	      IF(Pos('&', Temp) <> 0)
                        THEN
	            GetQueryStringParameter := Copy(Temp, 1, Pos('&', Temp)-1)
	       ELSE
	            GetQueryStringParameter := Copy(Temp, 1)			                  
	END
    END
END;

BEGIN
  WRITELN('Content-Type: text/plain');
  WRITELN;
  WRITELN(GetQueryStringParameter(''));
  READLN
END.