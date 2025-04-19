Service-mesh setup (Istio)
	Install istio
		istioctl install --set profile=demo -y
	Inject Istio container as a sidecar proxy in each pod
		kubectl label namespace default istio-injection=enabled
	Build images of microservices:
		docker build -t user-service ./user
		docker build -t order-service ./order
		docker build -t payment-service ./payment
	Run deployment yaml files to create POD replicas
		kubectl apply -f user-deployment.yaml
		kubectl apply -f order-deployment.yaml
		kubectl apply -f payment-deployment.yaml
	Run Istio yaml file to enable external gateway
		kubectl apply -f istio-gateway.yaml
	Run horizonal pod autoscaling yaml 
		kubectl apply -f order-hpa.yaml
		kubectl apply -f payment-hpa.yaml
		kubectl apply -f user-hpa.yaml
	Run Circuit breaker yaml file
		kubectl apply -f payment-cb.yaml
	Get External IP that is exposed by Istio gateway
		minikube tunnel
		# In another terminal
		kubectl get svc istio-ingressgateway -n istio-system
	Enable Observability
		istioctl dashboard kiali
		istioctl dashboard jaeger
