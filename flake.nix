{
  description = "raesan-web";
  inputs = {
    nixpkgs.url =
      "github:nixos/nixpkgs/6c90912761c43e22b6fb000025ab96dd31c971ff";
	bun_1_2_0-pkgs.url =
      "github:nixos/nixpkgs/f898cbfddfab52593da301a397a17d0af801bbc";
    flake-utils.url = "github:numtide/flake-utils";
  };
  outputs = { self, nixpkgs, flake-utils, ... }@inputs:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
        bun_pkgs = inputs.bun_1_2_0-pkgs.legacyPackages.${system};
      in {
        formatter =
          pkgs.nixfmt-classic;
        devShell = pkgs.mkShell {
          packages = [
		  	bun_pkgs.bun
          ];
        };
      });
}
