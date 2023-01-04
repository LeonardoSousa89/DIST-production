node -v

start config.bat

if not exist app md app 

if exist app cd app

npm init -y

echo INSTALAÇÃO CONCLUÍDA COM ÊXITO, APERTE ENTER PARA CONTINUAR E ENCERRAR A SESSÃO... && pause >nul

