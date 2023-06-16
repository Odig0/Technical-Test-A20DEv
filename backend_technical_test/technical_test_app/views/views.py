
from rest_framework.decorators import api_view
from rest_framework.response import Response
from  rest_framework import status
from technical_test_app.logic import Chess
from technical_test_app.logic import Solution


@api_view(['POST'])
def chess(request):
    try:
        print(request.data)
        chess= Chess(**request.data)
        chess.validate()
        attack_queen_response = chess.queensAttack()
        
        
        return Response({'response': str(attack_queen_response)})
    except ValueError as v:
        return Response({'response': str(v)}, status= status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        return Response({'response': str(e)}, status= status.HTTP_500_INTERNAL_SERVER_ERROR)
    
 

@api_view(['POST'])
def string(request):
    try:               
        a = request.data.get('a')
        string= Solution()
        string.validate_input_string
        string_max_value = string.maxValue(a)

        
        return Response({'response': str(string_max_value)})
    except Exception as e:
        return Response(str(e), status= status.HTTP_404_NOT_FOUND)
    
