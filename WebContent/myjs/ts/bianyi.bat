for /R %CD% %%s in (*.ts) do ( 
tsc  --target "ES5" %%s 
)
