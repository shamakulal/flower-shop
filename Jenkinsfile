
pipeline {
    agent any

    tools {
        nodejs 'Node20'
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Source code checked out from GitHub'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Build React Application') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Verify Build') {
            steps {
                bat 'if not exist dist\\index.html exit /b 1'
                echo 'Production build verified'
            }
        }

        stage('Azure Login') {
            steps {
                withCredentials([
                    string(credentialsId: 'azure-tenant-id',
                           variable: 'AZURE_TENANT_ID'),
                    string(credentialsId: 'azure-client-id',
                           variable: 'AZURE_CLIENT_ID'),
                    string(credentialsId: 'azure-client-secret',
                           variable: 'AZURE_CLIENT_SECRET')
                ]) {
                    bat '''
                    @echo off
                    "C:\\Program Files\\Microsoft SDKs\\Azure\\CLI2\\wbin\\az.cmd" login --service-principal -u "%AZURE_CLIENT_ID%" -p "%AZURE_CLIENT_SECRET%" --tenant "%AZURE_TENANT_ID%" --output none
                    '''
                }
            }
        }

        stage('Upload to Azure Blob') {
            steps {
                bat '''
                @echo off
                "C:\\Program Files\\Microsoft SDKs\\Azure\\CLI2\\wbin\\az.cmd" storage blob upload-batch --account-name reactwebsites10 --destination flower-shop --destination-path "releases/%BUILD_NUMBER%" --source dist --auth-mode login --overwrite true
                '''
            }
        }

        
stage('Deploy to Azure VM') {
    steps {
        withCredentials([
            sshUserPrivateKey(
                credentialsId: 'flower-vm-ssh',
                keyFileVariable: 'SSH_KEY',
                usernameVariable: 'SSH_USER'
            )
        ]) {
            bat '''
            @echo off

            echo Fixing temporary SSH key permissions...

            icacls "%SSH_KEY%" /inheritance:r
            if errorlevel 1 exit /b 1

            icacls "%SSH_KEY%" /remove:g "*S-1-5-32-545"
            if errorlevel 1 exit /b 1

            icacls "%SSH_KEY%" /grant:r "*S-1-5-18:F"
            if errorlevel 1 exit /b 1

            icacls "%SSH_KEY%"

            echo Connecting to Azure VM...

            ssh -i "%SSH_KEY%" -o BatchMode=yes -o ConnectTimeout=15 -o StrictHostKeyChecking=accept-new "%SSH_USER%@20.175.74.194" "sudo -n /usr/local/bin/deploy-flower-shop %BUILD_NUMBER%"
            '''
        }
    }
}


        stage('Verify Website') {
            steps {
                bat '''
                @echo off
                curl.exe -fI https://flower-shop-demo.duckdns.org
                '''
            }
        }
    }

    post {
        always {
            bat '''
            @echo off
            "C:\\Program Files\\Microsoft SDKs\\Azure\\CLI2\\wbin\\az.cmd" logout
            '''
        }
    }
}
