from django.shortcuts import render



def calculadora(request):
    if 'expression' in request.POST:
        expression = request.POST['expression']
    else:
        expression = ''

    if 'result' in request.POST:
        result = request.POST['result']
    else:
        result = ''

    return render(request, 'main/index.html', {'expression': expression, 'result': result})
