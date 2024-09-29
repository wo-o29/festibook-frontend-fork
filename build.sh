cd ../ #상위 디렉토리로 이동
mkdir output # 새로운 'output' 디렉토리 생성
cp -R ./frontend/* ./output # 'frontend' 디렉토리의 내용을 'output'으로 복사
cp -R ./output ./frontend/ # 'output' 디렉토리를 다시 'frontend' 디렉토리 안으로 복사
