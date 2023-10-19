for files in  *.txt
do
	folderName=`echo $files | awk -F. '{print $1}'`;
	echo $folderName;
	echo $files;
	#echo $folderName;
	printf "\n";
	if [ -d $folderName ]
	then
		rm -rf $folderName;
	fi
		mkdir $folderName;
		cp $files $folderName;
done

