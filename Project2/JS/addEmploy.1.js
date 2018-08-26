            var num = 1;

            function addMore()
            {
                var forms = document.getElementById("form1");
                
                var types = document.createElement("select");
                types.setAttribute("id","type"+num);
                types.setAttribute("name","tType");

                var fullTime = document.createElement("Option");
                fullTime.innerHTML="Full Time";
                fullTime.value="Full Time";

                var partTime = document.createElement("Option");
                partTime.innerHTML="Part Time";
                partTime.value="Part Time";

                var casual = document.createElement("Option");
                casual.innerHTML="Casual";
                casual.value="Casual";

                var intern = document.createElement("Option");
                intern.innerHTML="Internship";
                intern.value="Internship";

                var apprentice= document.createElement("Option");
                apprentice.innerHTML="Apprenticeship";
                apprentice.value="ApprenticeShip";

                types.appendChild(fullTime);
                types.appendChild(partTime);
                types.appendChild(casual);
                types.appendChild(intern);
                types.appendChild(apprentice);

                var posTitle = document.createElement("input");
                posTitle.setAttribute("type","text");
                posTitle.setAttribute("placeholder","Position Title");
                posTitle.setAttribute("id","title"+num);
                posTitle.setAttribute("name","tName");

                var manName = document.createElement("input");
                manName.setAttribute("type","text");
                manName.setAttribute("placeholder","Manager's Name");
                manName.setAttribute("id","manager"+num);
                manName.setAttribute("name","tManager");

                var manPhone = document.createElement("input");
                manPhone.setAttribute("type","text");
                manPhone.setAttribute("placeholder","Manager's Phone");
                manPhone.setAttribute("id","managerPhone"+num);
                manPhone.setAttribute("name","tManagerPhone");

                var org = document.createElement("input");
                org.setAttribute("type","text");
                org.setAttribute("placeholder","Organisation");
                org.setAttribute("id","org"+num);
                org.setAttribute("name","tOrg");



                var start = document.createElement("input");
                start.setAttribute("type","text");
                start.setAttribute("placeholder","Date Started");
                start.setAttribute("id","startDate"+num);
                start.setAttribute("name","tStartDate");

                var end = document.createElement("input");
                end.setAttribute("type","text");
                end.setAttribute("placeholder","Date Finished");
                end.setAttribute("id","endDate"+num);
                end.setAttribute("name","tEndDate");

                var task = document.createElement("input");
                task.setAttribute("type","textArea");
                task.setAttribute("placeholder","Tasks");
                task.setAttribute("id","tasks"+num);
                task.setAttribute("name","tTasks");


                var h = document.createElement("P");
                h.setAttribute("id","para"+num);

                forms.appendChild(h);

                forms.appendChild(types);
                forms.appendChild(posTitle);
                forms.appendChild(manName);
                forms.appendChild(manPhone);
                forms.appendChild(org);
                forms.appendChild(start);
                forms.appendChild(end);
                forms.appendChild(task);
                num++;
            }

            function addQual()
            {
                var typeArr = [];
                var titleArr= [];
                var manNArr= [];
                var manPArr=[];
                var orgArr = [];
                var startArr= [];
                var endArr=[];
                var taskArr = [];
                for(var i = 0;i<num;i++)
                {
                    typeArr[i]=document.getElementById("type"+i).value;
                    titleArr[i]=document.getElementById("title"+i).value;
                    manNArr[i]=document.getElementById("manager"+i).value;
                    manPArr[i]=document.getElementById("managerPhone"+i).value;
                    orgArr[i]=document.getElementById("org"+i).value;
                    startArr[i]=document.getElementById("startDate"+i).value;
                    endArr[i]=document.getElementById("endDate"+i).value;
                    taskArr[i]=document.getElementById("tasks"+i).value;
                                        
                }

                var htts;
                htts = new XMLHttpRequest();
                htts.open("POST","../PHP/addEmployment.php",true);
                var hID = {};
                hID.typeData= typeArr; 
                hID.titleData=titleArr;
                hID.manData=manNArr;
                hID.manPData=manPArr;
                hID.orgData=orgArr;
                hID.startData=startArr;
                hID.endData=endArr;
                hID.taskData=taskArr;
                hID.lengths =num;
                htts.send(JSON.stringify(hID));
                alert(num + " jobs have been added");
            }